# Blog using Django
Blog website for an individual or company.
All visitors can read all the blogs and comment on it.
Only users/superuser created by admin can post the new blog.
superuser has athuority to approve a comment or remove it.
unitll a comment is not approved it won't show to the website visitors.
New Blog doesn't reflect to end website visitors untill published from draft post area.
Superuser's can edit or remove the old posts.

Versions-

Python- 3.8
Django- 3
Bootstrap- 4

To use this project create a superuser and login to create a new post
Follow this below process to use :

a) To make models and migrate them with applications
      --> $ python manage.py migrate
      --> $ python manage.py makemigrations blog
      --> $ python manage.py migrate

b) To create a superuser (and follow the steps in commond prompt)
      --> $ python manage.py create superuser

c) To run over a localhost
      --> $ python manage.py runserver
      
  if the local IP address shows refused to connect
      --> $ python manage.py runserver 127.0.0.1:8000 
