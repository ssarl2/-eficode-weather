FROM ubuntu

MAINTAINER hyunbin.park1026@gmail.com

RUN     apt-get update && \
        apt-get install -y npm

WORKDIR /root/efi/

# Do not use && \ for COPY command
COPY    frontend ./frontend/
COPY    code/frontend ./code/
COPY    frontend.sh ./frontend.sh
COPY    run.sh ./run.sh

RUN     chmod +x *.sh

RUN     ./frontend.sh

EXPOSE 8000

CMD ["/root/efi/run.sh"]