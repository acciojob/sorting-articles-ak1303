//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
bands.sort((str1,str2)=>{
	let s1 = str1.replace(/\b(?:a|A|the|The|an|An)\b/g,'').trim();
	let s2 = str2.replace(/\b(?:a|A|the|The|an|An)\b/g,'').trim();
	return s1.localeCompare(s2);
});

bands.map(value=>{
	let parent=document.querySelector("#bands");
	let box = document.createElement("li");
	box.innerHTML = `<h4>${value}</h4>`;
	parent.appendChild(box);
})
