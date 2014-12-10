class Sample
  include Mongoid::Document
  include Mongoid::Paperclip

  field :name, type: String
  field :url, type: String
  field :audiofile, type: String
  field :category, type: String

  has_mongoid_attached_file :afile,
  	:storage => :dropbox,
    :dropbox_credentials => Rails.root.join("config/dropbox.yml")

  validates_attachment_content_type :afile, :content_type => /.*/

end
