# frozen_string_literal: true

def adjust_final_source
  Dir.glob('build/assets/*.json').select { |file| /manifest/.match file }.each { |file| File.delete(file) }

  File.write('build/CNAME', 'advanced-bt.com')
  File.write('build/404.html', "You have reached our 404 Page. <a href=\"/\">Go back to the home page!</a>")

  add_content_to_source(postion: 'header', view_source_file: 'view_source_header.txt')
  add_content_to_source(postion: 'footer', view_source_file: 'view_source_footer.txt')
end

def add_content_to_source(postion:, view_source_file:)
  Dir.glob('build/**/*.html').map(&File.method(:realpath)).each do |path|
    return if path.include?('404.html')
    File.write(path, add_to_source(postion: postion,
                                   content: File.read(path),
                                   view_source_file: view_source_file))
  end
end

def add_to_source(postion:, content:, view_source_file:)
  return write_footer_content(content: content, view_source_file: view_source_file) if postion == 'footer'
  return write_header_content(content: content, view_source_file: view_source_file) if postion == 'header'

  raise StandardError, 'Unfortunately the view source postion is not valid!'
end

def read_source_file(view_source_file:)
  File.read("source/partials/#{view_source_file}").strip
rescue StandardError
  raise StandardError, 'Unfortunately the view source file can not be located!'
end

def write_footer_content(content:, view_source_file:)
  search_str = "<\/html>"
  content.insert(content.index(search_str), "\n\n#{read_source_file(view_source_file: view_source_file)}\n\n")
rescue StandardError
  raise StandardError, 'Unfortunately the view source footer index can not be located!'
end

def write_header_content(content:, view_source_file:)
  search_str = 'html lang='

  pos_start = content.index(search_str)

  pos_end = content.index('>', pos_start) + 1


  content.insert(pos_end, "\n\n#{read_source_file(view_source_file: view_source_file)}\n\n")
rescue StandardError
  raise StandardError, 'Unfortunately the view source header index can not be located!'
end
