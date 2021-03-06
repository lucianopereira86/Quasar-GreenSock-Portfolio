![titulo](/docs/titulo.JPG)

# Quasar GreenSock Portfolio

Building a dynamic portfolio with Quasar and GreenSock.

## Objective

This projects is a sample of a dynamic portfolio website whose images are animated by [GreenSock](https://greensock.com/docs) plugin. You can add as much images as you want and change the portfolio structure to display them.
The demo can be tested at [quasar-greensock-portfolio.surge.sh](http://quasar-greensock-portfolio.surge.sh).

## How to run this project

Install the dependencies

```bash
npm install
```

Run the app

```bash
quasar dev
```

The main screen shows the portfolio grid. The black borders are merely for visualization of each portfolio block which must have an image, the company's name and the service provided by it. Gifs are accepted as images as well.

![quasar01](/docs/quasar01.JPG)

To add a new portfolio, you must open the Dashboard screen by clicking on the dashboard button at the top right corner.
The Dashboard screen contains a gallery with all the portfolios listed horizontally and a form that allows you to insert, update or remove a portfolio.

![quasar02](/docs/quasar02.JPG)

Creating a portfolio.

![quasar03](/docs/quasar03.JPG)

Portfolio listed in the gallery.

![quasar04](/docs/quasar04.JPG)

The main screen updates automatically when the portfolio list changes by putting each image in a block accordingly to its order.

![quasar05](/docs/quasar05.JPG)

When the mouse is over an image, the animation effect occurs.

![quasar06](/docs/quasar06.JPG)

After adding lots of images, this is the result. The structure was designed to fit 7 portfolios.

![quasar07](/docs/quasar07.JPG)

Everything is saved in the Vuex store, so it will be lost once you reload the page.

## How it works

The "/src/boot/gsap.js" file injects the GreenSock plugin into the Vue prototype.

![code01](/docs/code01.JPG)

Inside the "/src/components/MyPortfolio.vue" file, jQuery is used to listen to each portfolio's hover event.

![code02](/docs/code02_1.JPG)

The GreenSock plugin is responsible for the animation

![code02](/docs/code02_2.JPG)

The structure of each portfolio block is described at the "/src/pages/Index.vue".

![code03](/docs/code03.JPG)

To modify it, it's only necessary to change the "col" and "height" props of each MyPortfolio component identified by the "index" props. For example, considering that the "imgHeight" variable has the value 50, to make 3 blocks with the same height in the first row, the structure would be like this:

![code04_1](/docs/code04_1.JPG)

The result would be this:

![code04_2](/docs/code04_2.JPG)

Now, if the middle block should be twice the size of the other blocks, the structure would be like this:

![code05_1](/docs/code05_1.JPG)

If the "imgHeight" had the value 30, The result would be like this:

![code05_2](/docs/code05_2.JPG)

It's possible to insert a "MyPortfolio" component inside another one. The inner component should have the "col" props equals to 12 and use the "subPortfolio" class to fix some margin issues. For example:

![code06_1](/docs/code06_1.JPG)

And the result:

![code06_2](/docs/code06_2.JPG)

## Conclusion

The GreenSock plugin has LOTS of features but it was used only a few in this project.

The coolest thing we have done was to easily change the portfolio grid structure.
