class OtherController < ApplicationController
  # Turbo streams example
  def post_something
    respond_to do |format|
      format.turbo_stream {  }
    end
  end
end
