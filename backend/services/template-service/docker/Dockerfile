FROM python:3.11-slim

WORKDIR /app

# Prevent Python from buffering stdout/stderr
ENV PYTHONUNBUFFERED=1
ENV PYTHONPATH=/app

# Copy requirements
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy all source
COPY . .

EXPOSE 3002

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "3002"]
