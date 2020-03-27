FROM ubuntu

MAINTAINER hyunbin.park1026@gmail.com

RUN     apt-get update && \
        apt-get install -y npm

WORKDIR /root/efi/

# Do not use && \ for COPY command
COPY    backend ./backend/
COPY    code/backend ./code/
COPY    backend.sh ./backend.sh
COPY    run.sh ./run.sh

RUN     chmod +x *.sh

RUN     ./backend.sh

EXPOSE 9000

CMD ["/root/efi/run.sh"]