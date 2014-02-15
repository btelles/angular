fork do
  require 'guard'
  require 'guard/cli'
  Guard::CLI.start
end

use Rack::Static,
  urls: %w{/},
  root: "./"


run lambda { |env|
  [
    200,
    {
      'Content-Type' => 'text/html',
      'Cache-Control' => 'public',
    },
    File.open(env.path, File::RDONLY)
  ]
}
