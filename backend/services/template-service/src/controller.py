from fastapi import APIRouter, HTTPException, Query
from typing import List
from src.service import TemplateService
from src.template import Template
from src.types import ServerResponse

router = APIRouter(tags=["Templates"])
service = TemplateService()

@router.get("/health")
def health():
    return ServerResponse(message="OK DOCTER FOR TEMPLATE SERVICE")

@router.get("/", response_model=List[Template])
def get_all_templates():
    return service.get_all_templates()

@router.post("/", response_model=Template)
def add_template(template: Template):
    created = service.add_template(template)
    if not created:
        raise HTTPException(status_code=500, detail="Failed to create template")
    return created

@router.put("/{template_id}", response_model=Template)
def update_template(template_id: str, template: Template):
    updated = service.update_template(template_id, template.dict(exclude_unset=True))
    if not updated:
        raise HTTPException(status_code=404, detail="Template not found")
    return updated

@router.delete("/{template_id}")
def delete_template(template_id: str):
    deleted = service.delete_template(template_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Template not found")
    return {"deleted": True, "template_id": template_id}

@router.get("/search/{query}", response_model=List[Template])
def search_template(query: str):
    return service.search_template(query)

@router.get("/by_ids", response_model=List[Template])
def get_templates_by_id(ids: List[str] = Query(..., description="List of template IDs")):
    templates = service.get_templates_by_id(ids)
    if not templates:
        raise HTTPException(status_code=404, detail="No templates found for given IDs")
    return templates

@router.post("/transform/{template_id}/{uid}")
def transform_template_into_plan(template_id: str, uid: str):
    return service.transform_template_into_plan(template_id, uid)
