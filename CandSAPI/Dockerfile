# FROM python:3.8 as base
# WORKDIR /app
# COPY requirements.txt ./
# RUN pip install --no-cache-dir -r requirements.txt
# #COPY entrypoint.sh ./
# #RUN chmod +x ./entrypoint.sh 
# # Make the entrypoint scipt executable 
# # chmod: changing permissions for files in linux
# # +x : add the execute permission (what permissions are we setting?)
# # u: owner, g: group, o: all others, a: all (prepend to permission change)
# # chmod u+x would add execute permissions only to owner
# # chmod g-rwx would remove all permissions from group
# # File we are changing permissions 

# EXPOSE 8000
# ENTRYPOINT ["./entrypoint.sh"]


FROM python:3.8 as production
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . . 
RUN chmod +x ./entrypointprod.sh  
EXPOSE 8000
ENTRYPOINT ["./entrypointprod.sh"]


# Old dockerfile
# FROM python:3.8
# WORKDIR /app
# COPY requirements.txt ./
# RUN pip install --no-cache-dir -r requirements.txt
# COPY . .
# RUN chmod +x ./entrypoint.sh 
# EXPOSE 8000
# ENTRYPOINT ["./entrypoint.sh"]