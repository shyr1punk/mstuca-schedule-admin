gtar -cvzf schedule-admin-deploy.tgz build/
scp schedule-admin-deploy.tgz $SCHEDULE_USER@$SCHEDULE_HOST:~/schedule/admin
ssh $SCHEDULE_USER@$SCHEDULE_HOST "cd ~/schedule/admin && tar xf schedule-admin-deploy.tgz && exit"
