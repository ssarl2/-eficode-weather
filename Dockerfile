FROM ubuntu

MAINTAINER hyunbin.park1026@gmail.com

WORKDIR /root/efi/

RUN     apt update && \
        apt install -y vim && \
        apt install -y npm

COPY    backend ./backend/
COPY    frontend ./frontend/

EXPOSE 9000

CMD ["bash"]
