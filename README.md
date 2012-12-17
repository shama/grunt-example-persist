# grunt-example-persist
This is an example task demonstrating how to persist variables across watch child spawned tasks (heck the child process doesn't even have to be on the same server :P).

View the [example task source](https://github.com/shama/grunt-example-persist/blob/master/tasks/persist.js)...

## Try It
* Download this repo: `git clone git://github.com/shama/grunt-example-persist.git && cd grunt-example-persist`
* Install dependencies: `npm install`
* Run grunt: `grunt` OR `grunt persist watch`

## Example Output
```
$ grunt
Running "jshint:all" (jshint) task
>> 2 files lint free.

Running "persist:server1" (persist) task
>> Creating Server: server1

Running "persist:server2" (persist) task
>> Creating Server: server2

Running "watch" task
Waiting...OK
>> File "tasks/persist.js" changed.
Running "jshint:all" (jshint) task
>> 2 files lint free.

Running "persist:server1" (persist) task
>> Reloaded Server: server1

Running "persist:server2" (persist) task
>> Reloaded Server: server2

Done, without errors.
```

## License
Copyright (c) 2012 Kyle Robinson Young  
Licensed under the MIT license.
