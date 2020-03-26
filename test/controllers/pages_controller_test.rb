require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get studio" do
    get pages_studio_url
    assert_response :success
  end

  test "should get events" do
    get pages_events_url
    assert_response :success
  end

  test "should get training" do
    get pages_training_url
    assert_response :success
  end

  test "should get contact" do
    get pages_contact_url
    assert_response :success
  end

end
