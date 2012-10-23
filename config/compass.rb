if defined?(Sinatra)
  # This is the configuration to use when running within sinatra
 project_path = Sinatra::Application.root
end

# This is common configuration
sass_dir = File.join 'views', 'stylesheets'
images_dir = File.join 'static', 'images'
http_path = "/"
http_images_path = "/images"
http_stylesheets_path = "/stylesheets"
