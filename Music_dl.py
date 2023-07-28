import moviepy.editor as mp
source = input('Entrer la video à mettre en music : ')
clip = mp.VideoFileClip(source)
destination = input("l'emplacement du fichier : ")
clip.audio.write_audiofile(destination)