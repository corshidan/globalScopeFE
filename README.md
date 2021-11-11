# Bootcamper Dashboard
## Team GlobalScope Final School of Code Project
November 2021 - 4 week project

---

### Problem Statement:
"Bootcampers do not have a way to easily record their journey and document their experience through the bootcamp."

---

### Current situation:
Bootcampers currently have no tools to structure the reflection process. They do not have access to previous reflections they have made, and disengage with the process.

---

### Why it's important:
The reflection process is an important aspect of learning and development, perhaps more so for bootcampers, who take part in such an intensive experience.
Not only can reflecting help develop an understanding of the way you learn, it can also help to promote critical thinking and problem solving, both of which are key skills to have as a developer.

---

### Our solution:
A dashboard application for bootcampers to be able to record and access their reflections in one convenient place. This includes features to encourage the bootcampers to engage.

Ability for the coaching staff to be able to access the data from the reflections in order to get a better understanding of how the bootcampers are feeling and progressing over the bootcamp.

---

## Project Details

### Tech Stack:

HTML5, CSS3, JavaScript, React, NodeJS, PostgreSQL, Express, MaterialUI, TailwindCSS, Chakra, DaisyUI, ChartJS, Jest, Cypress, React Testing Library, Figma, Jira, Confluence.

Cloud hosted using Heroku and Netlify.

---

### Link to the App

[Bootcamper Dashboard](https://reflectionsconsole.netlify.app/)

---

### How to use the app and the user's journey.

##### User story 1: Bootcamper

1. Following the link to the app you will be taken to a log-in page. For first time users, create an account by entering your name and email, how often you intend to reflect each week, your unique bootcamper ID, and when you started the bootcamp.

2. On logging in, you are taken to a personalised main dashboard page, which presents a navigation sidebar, 4 cards, and a friendly dog to encourage you to reflect. There is a star which shows how many reflections you have completed. There is also a different motivational quote displayed to increase engagement.

3. You can then navigate to the “add to blog” page, either via the card or the link in the nav bar, where you can record the topics you covered that day, along with a confidence rating out of 5 for each topic. As bootcampers fill out the reflection form, the topics that they have chosen will be added to the dropdown list to help prompt the next bootcampers on what topics they have covered that day, but of course, you can add your own. You can add your overall confidence rating since the last time you reflected. You are then encouraged to record what you are grateful for, and anything that you wish to improve on, before adding any other general thoughts and finally rating your current mood. There is the option to make the reflection private so that coaches will not have access, so feel free to add private thoughts.

The template that we have provided was designed with the feedback in mind that bootcampers would like to have more structure to inspire their reflections rather than starting from a blank page.

4. Navigating back to the dashboard, there is a card that allows you to review statistics about how you have recently rated your mood and confidence. The graph on the left shows your average mood, the progress bar in the middle shows how far through the bootcamp you are as a percentage, top right shows your overall confidence rating, and then the bottom graphs break the mood ratings down further.

5. For the final card on the dashboard, we added a word cloud - pulling words from the your personal reflections, to encourage you to engage, and providing them a way to share your experience.

##### User story 2: Coach

1. The second part of the application requires logging in with an admin account. (email: admin@soc.com)

2. The admin portal is provided for the coaches to be able to quickly review the current confidence levels and overall feelings of the bootcampers. This can be filtered by the timeframe you wish to review, and by selecting a specific bootcamper, you can see a visual representation of how that person’s mood and confidence has changed over that time period. This might be the most valuable aspect of the app, as it can highlight bootcampers that are struggling, so that coaches can reach out to those who may need support. This is sorted by mood so that the bootcampers with the lowest mood score will appear at the top of the list, and will be highlighted in red if it is below a certain threshold.

3. The coaches can also download a copy of all the bootcamper’s reflections (excluding those that were marked as private) if they need more in-depth information.

4. At the top of the page, the star now shows the total number of reflections completed by all the bootcampers, so the coaches can gauge how often the bootcampers are engaging.

5. The word cloud link takes the coach through to the cohort word cloud that is made of words from all of the bootcampers’ reflections which adds value for promotional purposes.

---


### How it looks:

<p align="center" float="left">
<img src="./Screenshots/ReadMeScreenshots/loginPage.png" width="400" alt="login page"/>
<img src="./Screenshots/ReadMeScreenshots/dashboard.png" width="400" alt="dashboard"/>
</p>

---

<p align="center" float="left">
<img src="./Screenshots/ReadMeScreenshots/inputPage.jpg" width="400" alt="inputPage"/>
</p>

---

<p align="center" float="left">
<img src="./Screenshots/ReadMeScreenshots/calendar.png" width="400" alt="calendar"/>
<img src="./Screenshots/ReadMeScreenshots/statsPage.png" width="400" alt="statsPage"/>
</p>

---

<p align="center">
<img src="./Screenshots/ReadMeScreenshots/wordCloud.png" width="400" alt="wordCloud"/>
<img src="./Screenshots/ReadMeScreenshots/adminPage.png" width="400" alt="adminPage"/>
</p>

---

## Meet the team

<p align="center">
<img src="./Screenshots/ReadMeScreenshots/globalScope.png" width="800" alt="pixelCharacters"/>
</p>
