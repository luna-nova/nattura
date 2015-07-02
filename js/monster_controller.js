var monsterMod = angular.module("beastiary", ["ngRoute"]);

monsterMod.controller("MonsterController", ["$scope", "$routeParams", function($scope, $routeParams) {
  $scope.beastIndex = $routeParams.index;
  $scope.monsters = [
    {
      name: "Sapball",
      image: "http://lorempixel.com/600/600",
      text: {
        paragraph1: "Any time a tree is severely damaged, there is usually enough sap for a sapball to form. They are scavengers who are generally docile but will protect their tree if in danger. Some see this relationship as the sapballs being an extension of the tree’s will. Different types of trees will yield different traits to a Sapball. The Fulair trees are most common in the plains areas which produce the most sap.",
        paragraph2: "During colder seasons very few trees are able to produce enough sap to keep the population up. The freezing temperatures damage the bark of most trees and create more openings for sap so that when the blooming seasons come, the sapball population spikes. Though believed to be just a myth, there are reports of adventurers battling with a King Sapball who roams freely and cultivates sapballs from all around to use as an army."
      }
    },
    {
      name: "Fluff Diver",
      image: "http://lorempixel.com/600/600",
      text: {
        paragraph1: "Accumulated plume and mysterious down fashioned into a nice, fluffy ball with a feather tail for gliding. Fluff Divers are not all cute, however. They catch drifts in the morning to reach tall tree branches or high cliffs and then decend on prey silently. Though mainly located in the Largo Plains, Fluff Divers are known to travel long distances on the wind ending up on mountain tops and deep groves in the Fungus Empire area.",
        paragraph2: "The middle of Autumn is when the population is at its largest and there is much competition between divers for a steady source of food. There have been several reports of large Fluff Divers actually assaulting merchant and supply wagons and killing those who try to stop them from plundering."
      }
    },
    {
      name: "Web Wisp",
      image: "http://lorempixel.com/600/600",
      text: {
        paragraph1: "Certain silk strands that either a spider wizard created or came about as a result of the Magispark Phenomenon. Web Wisps prefer calm, cloudy days as wind or rain make traversing more difficult. While grey skies aid them in camoflauge, the sun helps provide vitamins and regulate temperature.",
        paragraph2: "During Wintra and Daumor most Web Wisps anchor down in cracks crevices only leaving to get the food they need. They are most active during La’nelis where one could even describe a mild day in the season looking like snow drifting about. It takes a decent weaver and journeyman Wizard to create a good Web Wisp as an ally. If the Wizard is not powerful enough the creature may end up slightly deformed, unwilling to obey, or both."
      }
    }
  ]
}]);
