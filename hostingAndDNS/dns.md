## cleanersquare.co.uk

1. makes a http request to -> http://cleanersquare.co.uk/
2. goDaddy (15.197.142.173:80) sends back 301 Moved Permanently
3. redirect to this location -> https://www.cleanersquare.co.uk/
4. chrome loads the html document received ---> <CORRECT>

## http://cleanersquare.co.uk/

1. makes a http request to -> http://cleanersquare.co.uk/
2. goDaddy (15.197.142.173:80) sends back 301 Moved Permanently
3. redirect to this location -> https://www.cleanersquare.co.uk/
4. chrome loads the html document received ---> <CORRECT>

## https://cleanersquare.co.uk/

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX FAILED

## www.cleanersquare.co.uk

1. makes a https request to -> https://www.cleanersquare.co.uk/
2. ?? ([2600:9000:225c:6800:1:8391:9900:93a1]:443) sends back 304 response
3. sends back html document alongside
4. chrome loads the html document received ---> <CORRECT>

## http://www.cleanersquare.co.uk/

1. makes a http request to -> http://www.cleanersquare.co.uk/
2. ?? ([2600:9000:225c:6800:1:8391:9900:93a1]:80) sends back 301 Moved Permanently (from disk cache) response
3. redirect to this location -> https://www.cleanersquare.co.uk/
4. makes a https request to -> https://www.cleanersquare.co.uk/
5. ?? ([2600:9000:225c:6800:1:8391:9900:93a1]:443) sends back 304 response
6. sends back html document alongside
7. chrome loads the html document received ---> <CORRECT>

## https://www.cleanersquare.co.uk/

1. makes a https request to -> https://www.cleanersquare.co.uk/
2. ?? ([2600:9000:225c:6800:1:8391:9900:93a1]:443) sends back 304 response
3. sends back html document alongside
4. chrome loads the html document received ---> <CORRECT>
