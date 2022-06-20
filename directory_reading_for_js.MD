## Handlebars Layout

I'm making a note for the group to see what the server is being used.  Here, I would put any information as to what server is working.


main.hbs

This one is used from an example on the web.  Unless we were to change on the code, use this only to understand what the handlebars are doing.


mainattempt.hbs

This is only the skeleton of the site.  What this includes are the title and the stylesheet for the page.  There's nothing else on it.  The idea behind this handlebar is so we can apply all the CSS on the pages without identifying every time.  We have two different layouts:  One for the products in general and the other is for the forms in general.  This is suppose to have a way to use the stylesheets only.  The {{{body}}} is for the information on the page, INCLUDING the header.


maintwo.hbs

This attempt is when using ONLY the style of the form page.  It contains the same as the mainattempt, but this one has the logo in it.  The idea behind this page is so we can create a form handlebars.  I haven't got this to work properly when both are being read on the same port.  I have it in a way where you can use port 3000 and port 3001 to have them both read at the same time and have different layouts.  Port 3001 occupies this information.


shoppingtemplate.hbs

Like the last one, this one uses the mainattempt.hbs.  The difference, however, is that it is using any pages that have the product in it.  This is mostly when viewing the different products and when checking out.  This uses Port 3000 in case you were to use the serverwinsdar.js





## Differnt Server Usages

This note is mostly for what you do when you use "node 'insert name' ".  The idea behind it is to use different methods in which the handlebars are laid out.  I have one of them working, which is the "serverwinsdar.js", though, this one is using two ports as suppose to only one.  I have another one, which is "servertestdirect.js" which is using the same method from Module 14 and then having different handlebars.  Here's the difference:

"serverwinsdar.js"
The idea behind this is to use two different main handlebars:  "maintwo.jbs" and "shoppingtemplate.hbs".  The reason why is because both of these handlebars are different than one another.  And the idea behind it is so that when we use the handlebar method, it'll generate each with their own layout.

"servertestdirect.js"
This is more what's close to Module 14.  In this one, we're basically using ONLY ONE main handlebar, which in this case, it'll have to be the "mainattempt.hbs".  This one contains ONLY the stylesheet for the HTML.  The idea behind it is so that when we use the blank slate, it'll then apply the necessary designs for the other pages.  I'm unable to make this work, however, so we'll have to wait on that.
-Instead, we'll use a different method:  We will still use the skeleton layout, but this time, all the other handlebars are going to be the pages respectively.  That way, we only use one main handlebar rather than two and we only use ONE port, which will be 3000