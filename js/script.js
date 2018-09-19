
$('#input-form input').on('input', function() {
	
  var $elem = $(this);
  var id = $(this).attr('id');

  $('#exp-'+id).html( $(this).val() );

  $('#textarea').val($('#signature-wrap').html());

});

$('#copy-button').click( function() {
  $('#textarea').focus();
  $('#textarea').select();
  document.execCommand('copy');
});


$('#textarea').click(function(){
  this.focus();
  this.select();
})

