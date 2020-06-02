print "Enter File Name: ";
file_name = gets.chomp;

file = File.open("#{file_name}.txt",'a+');

puts "Data Present Already in #{file_name}.txt \n #{file.read}";

print "Enter new Content: ";
new_data = gets;
file.write(new_data);

file.close;

file = File.open("#{file_name}.txt",'r');
puts "New Data in #{file_name}.txt \n #{file.read}";
file.close;