## setting up gatsby project

1.  gatsby new <foldername>
2.  npm run develop (!gatsby develop) - runs on local machine
3.  npm rum dev-m -runs on local network

4.  create remote git repo (cleanersquare)
5.  add remote origin
6.  git branch -M main
7.  git push -u origin main

## aws amplify + route53

8.  sign in to aws console
9.  go to aws amplify and choose deploy
10. authorise aws amplify to access github account
11. choose default settings and save and deploy

12. go to aws route 53 console
13. create new hosted zones
14. add the domain name/record
15. receive 4 Value/Route traffic to values

16. go to your domain provider (goDaddy)
17. go to nameservers and change to custom values
18. add those 4 values/route traffic from aws route 53

19. verifying domain ownership
20. go to route 53 hosted zones

ref: https://www.youtube.com/watch?v=uaG2mMYLI68

## firebase + goDaddy

19. use firebase cli to deploy the app to firebase
20. add custom domains
21. one for the domain name
22. one for the redirecting sub domains to main domain

23. go to domain provider (goDaddy)
24. add two TXT records name(@ && www) with google verification code
25. add two A record name(@ && www) with value of ip address provided by firebase

## aws amplify + goDaddy

8.  sign in to aws console
9.  go to aws amplify and choose deploy
10. authorise aws amplify to access github account
11. choose default settings and save and deploy
12. go to domain managment and add domain (cleanersquare.co.uk)
13. click on actions and view dns records
14. verified ownership of the domain by adding CNAME record in goDaddy console
15. pointed the www(traffic) to point to aws cloudfront(amplify) where the app is hosted by adding another CNAME record on goDaddy
16. added forwarding on goDaddy console by redirecting all http requests to https

ref: https://docs.aws.amazon.com/amplify/latest/userguide/to-add-a-custom-domain-managed-by-a-third-party-dns-provider.html
ref: https://docs.aws.amazon.com/amplify/latest/userguide/to-add-a-custom-domain-managed-by-godaddy.html

## root

cleanersquare.co.uk \*\*\*\* -> https://www.cleanersquare.co.uk/
http://cleanersquare.co.uk/ \*\*\*\* -> https://www.cleanersquare.co.uk/

https://cleanersquare.co.uk/

## www

www.cleanersquare.co.uk \*\*\*\* -> https://www.cleanersquare.co.uk/
http://www.cleanersquare.co.uk/ \*\*\*\* -> https://www.cleanersquare.co.uk/

## destination

https://www.cleanersquare.co.uk/ \*\*\*\*
