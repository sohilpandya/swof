# [swof App](https://swof.herokuapp.com/)

#### https://swof.herokuapp.com/

This Support Wheel of Fate App generates rota for engineers.

Someone has to do it! :blush:
What is a fair way to tackle this? (_some rules_)
- [x] An engineer can only do one half-day shift on a given day
- [x] An engineer cannot work two days in a row
- [x] An engineer should have completed one whole day of support in any 2 week period

#### How it Looks
| Desktop | Mobile |
| --- | --- |
| ![swof herokuapp com_](https://user-images.githubusercontent.com/2305591/34825777-b8173c20-f6cb-11e7-91f1-4dab76996934.png) | ![swof herokuapp com_ iphone 7](https://user-images.githubusercontent.com/2305591/34825796-d4d51d8c-f6cb-11e7-8116-d29d9b1ceb06.png) |

#### How it works
This app allows you to generate a shift per day. For testing purposes, we also have a fake shift generator button at the bottom, which will allow you to cycle through the shifts so that you can check all the criteria for selecting engineers has been met.

| **Stack** | 🤔  |
| --- | --- |
| React | _Frontend_ |
| Firebase | _API for Data_ |
| Jest | Testing 🎉  |
| Tachyons | _Styling_ |

**Run the app locally**
In order to run the app locally please follow the following steps (you need to have `node` installed):
```
git clone https://github.com/sohilpandya/swof.git
cd swof
npm i
npm run start // starts the app locally
npm run test // runs the app locally
```
| Tests (unit tests and snapshot test) |
| --- |
| ![screen shot 2018-01-11 at 13 04 30](https://user-images.githubusercontent.com/2305591/34826841-0f56d258-f6d0-11e7-9e7e-7a72e5113f4f.png) |

**Process**
You can view my process by having a look at the list of issues (open/closed) alongside having a look at my commit history. They should tell you a coherent story about how I went about building the app.

| Issues | PR | Commit |
| --- | --- | --- |
| ![github com_sohilpandya_swof_issues_q is 3aissue is 3aclosed](https://user-images.githubusercontent.com/2305591/34826052-fb01f132-f6cc-11e7-8ca9-f01068e5a066.png) | ![github com_sohilpandya_swof_issues_q is 3aissue is 3aclosed 1](https://user-images.githubusercontent.com/2305591/34826064-03ec07d8-f6cd-11e7-8145-c536569306ad.png) | ![github com_sohilpandya_swof_issues_q is 3aissue is 3aclosed 2](https://user-images.githubusercontent.com/2305591/34826074-09bdc976-f6cd-11e7-8d61-4274c0126cf4.png) |

_Very happy to receive feedback, please create an issue [here](https://github.com/sohilpandya/swof/issues/new)_

**Future**
Who knows what the future holds, there are a lot of things that need to be done to improve the experience
- Refactor the app further
- Provide historical information to users