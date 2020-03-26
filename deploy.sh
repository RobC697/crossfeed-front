#!/bin/bash 

installTerraform(){
    set -eux
    wget https://releases.hashicorp.com/terraform/0.12.21/terraform_0.12.21_linux_amd64.zip;
    unzip terraform_0.12.21_linux_amd64.zip -d terraform;
    sudo mv terraform/terraform /usr/local/bin; 
}
configureAWS(){
    aws configure set aws_access_key_id ${AWS_ACCESS_KEY_ID};
    aws configure set aws_secret_access_key ${AWS_SECRET_ACCESS_KEY};
    $(aws ecr get-login --no-include-email --region us-west-2);
}

runTerraform(){
    cd infastructure;
    terraform init;
    terraform validate;
    terraform plan -out=plan;
    terraform apply -auto-approve "plan";
    cd ..;
}

pushFrontendToECR(){
    docker build -t crossfeed-stage-frontend .;
    docker tag crossfeed-stage-frontend:latest 321940898149.dkr.ecr.us-west-2.amazonaws.com/crossfeed_staging:latest;
    docker push 321940898149.dkr.ecr.us-west-2.amazonaws.com/crossfeed_staging:latest;
    cd ..;
}

# migrateDB(){
#     sudo apt install -y postgresql-client || true;
#     npx sequelize-cli db:migrate;
# }

installTerraform;
aws --version;
terraform --version;
configureAWS;
#pushFrontendToECR;
runTerraform;
#migrateDB;
