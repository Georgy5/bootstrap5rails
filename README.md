# README

Rails 7, Bootstrap 5 tutorial
https://www.bootrails.com/blog/rails-7-bootstrap-5-tutorial/

Rails 7 has a very opinionated way to handle the front-end assets. Let's see how it works for Bootstrap 5.

## A big warning 

At BootrAils, we are very excited that Rails 7 is out since mid-december, 2021. The frontend assets management is once again completely different. Rails 6 almost dropped Sprockets in favor of Webpack - see [this article](https://www.bootrails.com/blog/rails-7-bootstrap-5-tutorial/), now Rails 7 almost dropped Webpack in favor of jsbundling-rails (with esbuild) + import maps + Sprockets.

So we, as Rails developers, have choices. For this tutorial, we will use the default Rails 7 options - but we are not sure you should. That's the fear. Relief will be for the end of the article.

If you want a full setup of Bootstrap 5 with Webpacker, see [that other article](https://www.bootrails.com/blog/rails-bootstrap-tutorial/).

### Prerequisites

* Ruby version 3 or greater\
recommended: 3.0.4\
I used: 3.1.2

* Bundler version 2.2 or greater\
recommended: 2.2.11\
I used: 2.3.17

* NPM version 7.1 or greater\
recommended: 8.3.0\
I used: 8.11.0

* Yarn version\
recommended: 1.22.0\
I used: 1.22.19

* PostgreSQL version 12 or 13\
recommended: 13.1\
I used: 12.9
