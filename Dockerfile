FROM ubuntu

MAINTAINER hyunbin.park1026@gmail.com


RUN     apt update && \
        apt install -y vim && \
        apt install -y npm

COPY    backend /root/efi/backend && \
        frontend /root/efi/frontend

WORKDIR /root/efi/

EXPOSE 9000

CMD ["bash"]
