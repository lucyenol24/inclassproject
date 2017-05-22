//storing the data with a key

var SETTINGS_KEY = "LSS_Settings";

var settings = getSettings( );

if ( settings.name ) {
  showHelloPage( );
} else {
  showFormPage( );
}

$('#edit-settings').on( 'click' , showFormPage );
$('#clear-settings').on( 'click' , clearSettings );

function getSettings( ) {
  var s = localStorage[ SETTINGS_KEY ];
  if ( s ) {
    return JSON.parse( s );
  } else {
    return { };
  }
}

function saveSettings ( ) {
  localStorage[ SETTINGS_KEY ] = JSON.stringify( settings );
}

function clearSettings( ) {
  localStorage.removeItem( SETTINGS_KEY );
}

function showHelloPage( ) {
  $('.show-name').text( settings.name );
  $('#hello-page').show( );
  $('#form-page').hide( );
}

function showFormPage( ) {
  $('#name').val( settings.name );
  $('#submit').on( 'click' , updateSettings );
  $('#hello-page').hide( );
  $('#form-page').show( );
  
  function updateSetting ( evt ) {
    evt.preventDefault();
    settings.name = $('#name').val();
    saveSettings( );
    showHelloPage( );
  }
}