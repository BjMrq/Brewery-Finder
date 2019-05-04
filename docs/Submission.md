# Submission Notes
Here is the React app that I have been asked to build.
Let me explain to you how I conceived it.
I was asked to build a little React app using a little free API in 3 days, or in 3 evenings to be more precise since I work full time. Well, I claim to be a fast learner, time to prove it.
Since I didn’t know React the first challenge was to understand how the framework works. After opening the project folder, I studied his structure. It is not like I am used to with Express, but it’s like building blocks one on top of the other.
I decide to go with the brewery API and I find an example project, I don’t understand it right away, I first need to get a better understanding of React itself. Especially how to make an API call, render the result, and handle some kind of routing.
So, I do what I always do when I want to learn a new technology, I go on Udemy.
I lean the principle and fast forward to the API call part and how to manipulate the state.
I get some data in the console log, then in my page!
I know have a list of 20 breweries in my homepage.
After this first step, I decide that I have the time to do a little bit of styling. Well I am not going to reinvent the wheel, a couple months ago I build a website for my girlfriend, let see what can be reused.
I won’t be able to use a Bootstrap style sheet, but I can go on the website I built, and copy paste the active style of the elements from the developer tool. I now have a navbar, a header and the data rendered in some cards, good enough.
Next let’s tackle routing.  Takes me some time to get it right but I decide to remove the homepage view and to keep only a central App view that render different elements depending of the path.
After some time reading articles on medium about how to pass data to another route, I finally end up with a specific brewery’s data on a different page, adding some more information is not so hard, type of brewery, phone and address should do the job. I think about adding a Google map frame but it’s late and I won’t have enough time for that, I settle with a get direction button that redirects to google map with the address appended to it and a call button.
I realize that I really only get the alphabetic first result of the API call, a search option is indispensable but I do not have much time left, I remember the example project of the API which contains a search option, I do not have time to refactor it I install the dependencies and implement it as it is into my project as it is with a little bit of styling. I add some meta and og graph for SEO, and I am done.
At the end I only have only view tat render different elements depending of the path.
In the components folder I have all my elements that will render some html code on the page with a css page related to those elements.
In the container folder I have the code that process some logic like the API call to render all the breweries and the search for a brewery.
This have been a little bit of a marathon, but I got a working app maybe I will dockerise it and deploy it.
Thanks for letting me prove myself and thanks for your time.
