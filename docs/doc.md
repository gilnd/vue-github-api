# Vue.js + Github Api  Doc

Hello! :) 

This project is a simple showcase test of vuejs + tailwind + github API.
This app searches github users with github api and shows theme on a list

### Requirments
```
Node.js & npm Installed 
```

### Project setup
After you have cloned the repository in your local workspace, execute this command under the root folder.
```
npm install
```

### Compiles and hot-reloads for development
After the previous after command succefully finished, to run the project just launch this command.
```
npm run serve
```

### Testing
There are Unit tests in this project, you just need to launch this command to execute them.
```
npm run test
```

### Pages
There are **2** pages in this project.
* **Home >** Is the homepage, it has a inputbox where you can type usernames and search them through github api. It will then display a list of users. If you click on the propted cards it will open a new tab with their profile. 
* **History >** Is a page where you can find your history of searched keywords and the last results of your search. You can also clear keywords history or user results.

This is how the tree looks like:
```
src
└─── views 
     ├─── History.vue
     ├─── Home.vue
     └─── Home.spec.js // unit test file
```
  
### Components
There are **4** components in this project. 

* **NavBar** > Navigation component wich changes rooter view.
* **Footer** > A minimalistic footer.
* **SearchUser** > A component where there is one inputbox where you can type usernames, if you press enter or click the search button it will emit one event to the *parent-component* which will trigger the api call with the typed username.
* **UserCard** > A minimalistic card which prints the data returned from the github API. It only prints the username and the profile image.


```
src
└─── components 
     ├─── Footer.vue
     ├─── NavBar.vue
     ├─── SearchUser.specs.js // unit test file
     ├─── SearchUser.vue
     └─── UserCard.vue
```

### Libraries Used
In this project i used some external libraries.
* **Tailwind.css** > A beautiful and simple css framework.
* **FontAwesome** > A Icon librari which provides free & usefull icons.
* **Jest** > For writing unit tests.
* **Vuex** > Store & State Manager which helps passing data through components esealy.
* **VueRouter** > The official router for Vue.js 