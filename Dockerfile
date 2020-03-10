FROM ubuntu

MAINTAINER hyunbin.park1026@gmail.com

RUN     apt update && \
        apt install -y vim && \
        apt install -y npm

WORKDIR /root/efi/

COPY    backend ./backend/ && \
        frontend ./frontend/

RUN     sed -i "s/APPID || '';/APPID || 'a227ab27a77fda78ed5f34e68001cbbd';/g" /root/efi/backend/src/index.js

EXPOSE 9000

CMD ["bash"]
