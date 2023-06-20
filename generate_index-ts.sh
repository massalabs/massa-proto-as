fd -e ts . ./assembly/massa/ | sed -e"s#^\./assembly/#\./#" | sed 's/\.ts$//' | sed -n 's/.*/export * from '\''&'\'';/p'
