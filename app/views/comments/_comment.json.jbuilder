json.extract! comment, :id, :poster, :message, :created_at, :updated_at
json.url comment_url(comment, format: :json)
