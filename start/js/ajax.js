//1. function gets data from json file. 2. gets data on page
//cl stands for card loading
//ajax responsibile for getting or sending data
$('document').ready(function(){
    
    function cl(){
        $.ajax({
            //calls ppl json and gets data
            url:'ppl.json',
            type: 'get',
            dataType: 'JSON',
            //cache set to false to get fresh batch of data
            cache: false, 
            //success whats going to happen if we get data
            success: function(data){
                console.log(data);
                //console.log(data[0]);
                //console.log(data['name']);
                //loop below
                $.each(data, function(index, values){
                    console.log(index);
                    //console.log(values);
                    console.log(values.id);
                    console.log(values.name);
                    console.log(values.gender);
                    $('#profile').append(`
    <div class="person" id="p${values.id}">
    <h3>${values.id}</h3>
    <div class="profileImage">
        <img src="img/${values.id}.jpg">
    </div>
    <h4>Name: ${values.name}</h4>
    <p>Gender: ${values.gender}</p>
    </div>
                    `);
                })
            }
        });
    };
    //data is now a variable. Data is an array
    
    cl();
    
    

});

