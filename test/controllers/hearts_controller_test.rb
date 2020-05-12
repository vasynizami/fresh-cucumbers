require 'test_helper'

class HeartsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @heart = hearts(:one)
  end

  test "should get index" do
    get hearts_url, as: :json
    assert_response :success
  end

  test "should create heart" do
    assert_difference('Heart.count') do
      post hearts_url, params: { heart: { movie_id: @heart.movie_id, user_id: @heart.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show heart" do
    get heart_url(@heart), as: :json
    assert_response :success
  end

  test "should update heart" do
    patch heart_url(@heart), params: { heart: { movie_id: @heart.movie_id, user_id: @heart.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy heart" do
    assert_difference('Heart.count', -1) do
      delete heart_url(@heart), as: :json
    end

    assert_response 204
  end
end
