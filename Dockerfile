FROM ubuntu

MAINTAINER hyunbin.park1026@gmail.com

RUN     apt-get update && \
        apt-get install -y vim && \
        apt-get install -y npm

WORKDIR /root/efi/

# Do not use && \ for COPY command
COPY    eficode ./eficode/
COPY    changed ./changed/
COPY    npmi.sh ./npmi.sh

RUN     chmod +x npmi.sh && \
        ./npmi.sh

COPY    run.sh ./run.sh
RUN     chmod +x run.sh

EXPOSE 8000 9000

CMD ["/root/efi/run.sh"]
