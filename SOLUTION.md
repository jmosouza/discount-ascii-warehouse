Solution
====

PLEASE READ WITH IMAGES ON GITHUB:

https://github.com/jmosouza/discount-ascii-warehouse/blob/master/SOLUTION.md

---

I enjoyed this challenge and put a lot of time in it (each day detailed in `STORY.md`). I included all features and did some styling to make it look nice. There's still more work that could be done, but the core is already a good overview of a week worth of work and I'll explain what the extras would be.

I understand the purpose of this coding challenge is to demonstrate my experience and way of working, so I'll focus on that.

**HINT:** to start the project, run `npm start`

![captura de tela 2017-11-07 as 16 26 24](https://user-images.githubusercontent.com/5458658/32513254-6ee3596a-c3d8-11e7-93ce-879a1408125b.png)

Beginning the project
---

Good **communication** is essential in a remote work environment. Thus from the ground up, I started a file called `STORY` that documents each step in the development of the project, so my evaluators can understand those steps. In a real scenario, that would be a `CHANGELOG` mantained by the team.

After that, the first things I did was reviewing instructions and exploring existing code. I set up a Postman project for the API. Postman generates an **API docs page** that could be shared with the rest of the team (in Pro plan). That was useful for me to try different parameters and see responses.

![captura de tela 2017-11-07 as 12 14 59](https://user-images.githubusercontent.com/5458658/32513184-24c998ee-c3d8-11e7-8fd7-3914f9614e1c.png)

Best practices
---

Before diving into code, I ran through my checklist of **best practices**:

- Initialize **git** and a remote repo
- Keep **code standards** with ESLint
- Keep the project **modularized** and prepare for **scale** with webpack
- As React is so much better in **ES2015+**, set up babel
- Set up **TDD**, and for that I love Jest

Some more best practices I follow:

#### Stateless React components

I prefer writing **stateless React components** because they are so much easier to test.

![captura de tela 2017-11-07 as 16 27 20](https://user-images.githubusercontent.com/5458658/32513303-97371168-c3d8-11e7-85ac-1c74aed8a59c.png)

#### Components vs containers

I keep separate files for React components and Redux containers because as the amount of code increases, the separation helps understand the purpose of each piece of code (separation of concerns). Same thing for actions and reducers.

![captura de tela 2017-11-07 as 15 58 09](https://user-images.githubusercontent.com/5458658/32513324-a07987ce-c3d8-11e7-95e4-3002f19353b0.png)

#### Reusable CSS

I avoid using inline styles. Although that's an obvious best practice nowadays, it's controversial in the React community. Some say styles should be embedded in components. I do use inline in specific cases (e.g. a characteristic of one specific component), but in general I prefer to follow the old-school best practice and use class names instead.

<img width="521" alt="captura de tela 2017-11-07 as 16 29 13" src="https://user-images.githubusercontent.com/5458658/32513398-db828384-c3d8-11e7-87c4-0fe25868ca5b.png">

#### TODO comments

When I don't have time to do something the way it should be, I leave a TODO comment so I don't forget it later:

![captura de tela 2017-11-05 as 16 39 08](https://user-images.githubusercontent.com/5458658/32513484-19ec182e-c3d9-11e7-89cc-58cb3214e030.png)

#### Global constants

Variables that hold configuration preferrably exist as a constant or ENV var:

![captura de tela 2017-11-05 as 17 04 59](https://user-images.githubusercontent.com/5458658/32513504-2783f6be-c3d9-11e7-88cb-ab44258f39b2.png)

#### What could be better

I used plain strings for action names. That's a bad practice. If I were to ship this project, first I would centralize action names in a single file or per-domain file.

<img width="242" alt="captura de tela 2017-11-07 as 16 32 27" src="https://user-images.githubusercontent.com/5458658/32513551-46a7f522-c3d9-11e7-9450-185b26ee5533.png">

I configured the infinite scroll event listener in componentDidMount of AsciiStore. Although there's nothing wrong with that, it would be best to extract infinite loading into a reusable component. And possibly open source it (the open source alternatives didn't work for me).

<img width="253" alt="captura de tela 2017-11-07 as 16 33 45" src="https://user-images.githubusercontent.com/5458658/32513630-7456f18a-c3d9-11e7-9b68-382e34ef6f68.png">

In CSS, I could cherry-pick the components I'm actually using from Bulma CSS framework. That can be easily done with SASS. For this project, I just imported all of them. Getting rid of useless parts of CSS makes the CSS file load faster on client-side.

<img width="321" alt="captura de tela 2017-11-07 as 16 34 15" src="https://user-images.githubusercontent.com/5458658/32513655-87e612b2-c3d9-11e7-9a5f-a7842631afcb.png">

I also left webpack in charge of importing CSS. That's great to speed up development with live-reloading, but bad for production because the webpage would be unstyled until JavaScript starts to execute. In production I would export CSS into its own file this way: https://webpack.js.org/plugins/extract-text-webpack-plugin/

Testing
---

I like Jest because it generates snapshots that make TDD almost boilerplate-less and also because it generates **coverage** report:

![captura de tela 2017-11-07 as 16 35 25](https://user-images.githubusercontent.com/5458658/32513707-b7f16dda-c3d9-11e7-9aee-96b794075f32.png)

I didn't reach 100% test coverage because I just wanted to demonstrate testing for some functionality, but in a real scenario this report would show the team what's missing.

Jest is even better when testing stateless React components, as I said. It helped me tons in the start of the project because all I needed was a component and some sample data to pass as props. No headless browser. No expectations that would probably change in the future. If a snapshot changes, it's immediately visible and update-able. Just quick, live-reloading tests.

One thing I want to highlight is how I **mock** dates to make tests for the ProductDate component consistent. If you have a component that depends on the current date and you don't mock that, tests will fail as time passes because the original snapshot or expected result will be different than by the time the test was written. Fortunately there's a simple solution for that: make the current date always return the same value in tests.

```
Date.now = () => new Date('Mon Oct 23 2017 12:00:00 GMT-0000 (-00)').getTime();
```

I recorded a video demonstrating this:

https://youtu.be/7iaQicfIj6c

![captura de tela 2017-11-07 as 16 44 47](https://user-images.githubusercontent.com/5458658/32514191-002e06d4-c3db-11e7-9110-643b3d7f266e.png)

The same concept can be applied to network requests and anything else external to the code that may change.

Debugging
---

React offers great debugging support out of the box. It shows great error messages in the browser console:

![1](https://user-images.githubusercontent.com/5458658/32513785-e7305e1c-c3d9-11e7-8a31-7da3eb314d9d.png)

In this example, the message says that some action creator in `Connect(AsciiStore)` doesn't return a proper action:

![2](https://user-images.githubusercontent.com/5458658/32513856-24d54160-c3da-11e7-8e9c-fe6f9efa0684.png)

The message helped me identify the error quickly just by telling me there was something wrong about the action creator. Turned out I had forgotten to return a proper function and instead I was returning the result of `dispatch`. The right way would be the following (thank you Stack Overflow):

![3](https://user-images.githubusercontent.com/5458658/32513873-303593ca-c3da-11e7-8c7a-b633ea7424cc.png)

I also use console-log-debugging when it's something deeper -- who doesn't? :)

Performance
---

While NDJSON is powerful on networking side, it turned out not to be that much of an advantage on rendering side. When I first wrote the infinite loading code, I appended new products to Redux state as they arrived. As the NDJSON response was parsed many times per second (many lines of products), new products were appended to the DOM many times per second too. That made the DOM freeze for a moment each time new products arrived. To save performance, I had to work around the parsing of NDJSON, unfortunately. In the final solution, the action waits for all NDJSON lines to parse and batch-insert all lines to Redux, causing a single, less overhead, re-render of the DOM.

The following video compares the before and the after:

https://youtu.be/FvxWHlUh7Hg

![captura de tela 2017-11-07 as 16 45 26](https://user-images.githubusercontent.com/5458658/32514214-1557975a-c3db-11e7-883a-570b38988878.png)

I'm still counting there should be a better way to use NDJSON and React, but I have yet to find that way.

Conclusion
---

I hope you like this solution. I'm always looking forward to improve my work so I welcome honest feedback.

Cheers!
