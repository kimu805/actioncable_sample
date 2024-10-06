5.times do |i|
  Message.create!(content: "content #{i + 1}")
end