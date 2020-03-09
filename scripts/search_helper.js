var options = {
  valueNames: [
    'name',
    'price',
    'address',
    'city'
  ],
  page: 3,
  pagination: true
};
var userList = new List('users', options);

// sort by price-->
$('.sort').on('keypress', function() {
 sortList();
});

function sortList() {
  var searchprice = $(this).val();
  console.log(searchprice);
  userList.sort(searchprice, ['price']);
}


function resetList(){
  userList.search();
  userList.filter();
  userList.update();
  $(".filter-all").prop('checked', true);
  $('.filter').prop('checked', false);
  $('.sort').prop('checked', false);
  $('.search').val('');
  console.log('Reset Successfully!');
};

function updateList(){
  var values_price = $("input[name=price]:checked").val();

 /* userList.filter(function (item) {
    var priceFilter = false;

    if(values_gender == "all")
    {
      genderFilter = true;
    } else {
      genderFilter = item.values().gender == values_gender;

    }
    if(values_address == null)
    {
      addressFilter = true;
    } else {
      addressFilter = item.values().address.indexOf(values_address) >= 0;
    }
    return addressFilter && genderFilter
  });*/
  userList.update();
  //console.log('Filtered: ' + values_gender);
}

$(function(){
  //updateList();
  $("input[name=price]").change(updateList);

  userList.on('updated', function (list) {
    if (list.matchingItems.length > 0) {
      $('.no-result').hide()
    } else {
      $('.no-result').show()
    }
  });
});