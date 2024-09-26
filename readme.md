Basicly Data Dictionary content extractor from the organization confluence account portal into a CSV file.
You can see all confluence API definitions at https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-blog-post.

This app was designed to run on the actual user machine (which is highly admin controlled and restricted windows laptop) cause by the time this app designed, the one who'll use this maybe only 1 user. By the time this developed, node is the only runtime that can be run quite flawlessly using "user" system environtment privilege without having any actual "installation" (since installing something require admin access and the organization admins are a literal pain in the ass).

The actual app is on the client directory which is a react app (too lazy to make UI on plain HTML JS... im just normies anyway 🗿) and the gateway basicly act as the client proxy (somehow CORS occur when hitting the confluence portal while plain JS dont idk... just normies anyway 🗿).

![Screenshot](/Screenshot.png)

Homework:
1 Please decide where to store all the entries (could be local or on some shared folder, mabe on a .JS file, idk need more clear minds)
2 Need to work on where all the entries will be stored (the load data button depends on point 1)
3 The add button will saved int the entries storage file (refer to depends on point 1)