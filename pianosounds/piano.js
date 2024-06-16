
var tags;

function start()
{
   var saveButton = document.getElementById( "saveButton" );
   saveButton.addEventListener( "click", saveSearch, false );
   var clearButton = document.getElementById( "clearButton" );
   clearButton.addEventListener( "click", clearAllSearches, false );
   loadSearches(); // load the previously saved searches
document.addEventListener('keydown', function(event){
	const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
	const key = document.querySelector(`div[data-key = "${event.keyCode}"]`);
	key.volume=0.2;
	if(!audio) return; 
	
	audio.currentTime = 0;
	audio.play();
	
	key.classList.add('playing');
	key.classList.add('active');
});

document.addEventListener('keyup', function(event){
	const key = document.querySelector(`div[data-key = "${event.keyCode}"]`);
	if(key) 
	{
		key.classList.remove('playing');
		key.classList.remove('active');
	}
});
} // end function start

function loadSearches() 
{
   var length = localStorage.length; // number of key-value pairs
   tags = []; // create empty array

   // load all keys
   for (var i = 0; i < length; ++i) 
   {
      tags[i] = localStorage.key(i);
   } // end for

   tags.sort(); // sort the keys

   var markup = "<ul>"; // used to store search link markup

   // build list of links
   for (var tag in tags) 
   {
      var query = localStorage.getItem(tags[tag]);
      markup += "<li><span>" + tags[tag] + "</span>" +
         "<input id = '" + tags[tag] + "' type = 'button' " + 
            "value = 'display' onclick = 'display(id)'>" +
         "<input id = '" + tags[tag] + "' type = 'button' " + 
            "value = 'Delete' onclick = 'deleteTag(id)'>";
   } // end for

   markup += "</ul>";
   document.getElementById("searches").innerHTML = markup;
}

function clearAllSearches() 
{
   localStorage.clear();
   loadSearches(); // reload searches
} // end function clearAllSearches

// saves a newly tagged search into localStorage
function saveSearch() 
{
   var query = document.getElementById("query");
   var tag = document.getElementById("tag");
   localStorage.setItem(tag.value, query.value); 
   tag.value = ""; // clear tag input
   query.value = ""; // clear query input
   loadSearches(); // reload searches
} // end function saveSearch

// deletes a specific key-value pair from localStorage
function deleteTag( tag ) 
{
   localStorage.removeItem( tag );
   loadSearches(); // reload searches
} // end function deleteTag
function display(tag)
{
    document.getElementById("tag").value = tag;
    "<img src='"+tag+"'>;
    loadSearches();
}
window.addEventListener( "load", start, false );
