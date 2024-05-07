"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  $storiesContainer.hide();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** Show add story form on click on "add story" */

function showStoryForm(evt) {
  console.debug("showStoryForm", evt);
  hidePageComponents();
  $storyForm.show();
  putStoriesOnPage();
}

$storySubmit.on("click", showStoryForm);

/** Show favorites on click on "favorits" */

function showFavorites(evt) {
  console.debug("showFavorites", evt);
  hidePageComponents();
  putFavoritesOnPage();
}

$navFavorites.on("click", showFavorites);

/** Show my stories on click on "my stories" */

function showMyStories(evt) {
  console.debug("showMyStories", evt);
  hidePageComponents();
  putMyStoriesOnPage();
}

$navMyStories.on("click", showMyStories);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  hidePageComponents();
  $navLogin.hide();
  $navUserProfile.text(`${currentUser.username}`).show();
  $mainNavLinks.show();
  $navLogOut.show();
  $storiesContainer.show();
}
