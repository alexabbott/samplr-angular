class SamplesController < ApplicationController

  def index
    samples = Sample.all
    render json: samples, status: 200
  end

  def show
    sample = Sample.find(params[:id])
    render json: sample, status: 201
  end


  def create
    sample = Sample.create(sample_params)
    render json: sample, status: 201
  end

  def update
    sample = Sample.find(params[:id])
    sample.update_attributes(sample_params)
    render nothing: true, status: 204
  end

  def destroy
    sample = Sample.find(params[:id])
    sample.destroy
    render nothing: true, status: 204
  end

  private

  def sample_params
    params.require(:sample).permit(:name, :url, :audiofile, :category, :afile)
  end

end