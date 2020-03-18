FROM ubuntu

MAINTAINER hyunbin.park1026@gmail.com

RUN     apt update && \
        apt install -y vim && \
        apt install -y npm

WORKDIR /root/efi/

# Do not use && \ for COPY command
COPY    backend ./backend/
COPY    frontend ./frontend/
COPY    npmi.sh ./npmi.sh

RUN     chmod +x npmi.sh && \
        ./npmi.sh

RUN     rm npmi.sh

RUN     sed -i "s/APPID || '';/APPID || 'a227ab27a77fda78ed5f34e68001cbbd';/g" /root/efi/backend/src/index.js

EXPOSE 8000 9000

CMD ["bash"]
