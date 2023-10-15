import os
import json
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from transformers import GPT2TokenizerFast
from langchain.embeddings import HuggingFaceEmbeddings
from langchain import HuggingFaceHub, LLMChain, PromptTemplate
from transformers import AutoTokenizer, AutoModelForCausalLM, pipeline, AutoModelWithLMHead
import torch

os.environ["HUGGINGFACEHUB_API_TOKEN"] = "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"

app = FastAPI()


class Anime_Generator:
    def __init__(self,userID,username,user_init_text, model_repo="databricks/dolly-v2-3b"):
        self.user_init_text=user_init_text
        self.username=username
        self.userID=userID
        self.model_repo = model_repo

    def update_variables(self, username,user_init_text):
        if user_init_text:
            self.user_init_text = user_init_text
        if username:
            self.username = username

    def get_response(self):
            
            generate_text = pipeline(model="databricks/dolly-v2-3b", torch_dtype=torch.bfloat16, trust_remote_code=True, device_map="auto")

            res = generate_text("### Instruction:\nWrite a script where Characters speak one by one\n\n### Response:\n"+self.user_init_text)

            return res[0]["generated_text"]

class GenerateRequest(BaseModel):
    userId: str
    user_name: str = None
    user_init_text: str =None

@app.post("/generate")
def Doubt_Solver(request: GenerateRequest):

    user_name=request.user_name
    user_init_text=request.user_init_text
    user_ID=request.userId

    os.environ["TOKENIZERS_PARALLELISM"] = "false"
    INST=Anime_Generator(user_ID,user_name, user_init_text)
    output=INST.get_response()

    return JSONResponse({"data": {"output":output},"status": 200, "message": "Response successful"})
