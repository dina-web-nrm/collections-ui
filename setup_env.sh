sudo sysctl -w fs.inotify.max_queued_events=100000
sudo sysctl -w fs.inotify.max_user_instances=100000
sudo sysctl -w fs.inotify.max_user_watches=100000

watchman shutdown-server