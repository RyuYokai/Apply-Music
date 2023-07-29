import moviepy.editor as mp 
from pytube import Playlist
import os

playlist = Playlist("https://www.youtube.com/playlist?list=PL8SYXpDG3AD_8mVplptdHR8Djqg0w6tf1")


for video in playlist.videos:
    video.streams.get_lowest_resolution().download("C:/Users/Alan/Desktop/Code/Music_Player/Assets/Music")
    print("Vidéo télécharger : ", video.title)
print("fin de dl des video")

MusicList = [ f for f in os.listdir('C:/Users/Alan/Desktop/Code/Music_Player/Assets/Music') if os.path.isfile(os.path.join('C:/Users/Alan/Desktop/Code/Music_Player/Assets/Music',f)) ]

print("début de la transformation")
for music in MusicList:
    final_music = ""
    source = f'C:/Users/Alan/Desktop/Code/Music_Player/Assets/Music/{music}'
    clip = mp.VideoFileClip(source)
    for i in range(len(music) - 4):
        final_music = final_music + music[i]
    destination = f'C:/Users/Alan/Desktop/Code/Music_Player/Assets/Music/MP3/{final_music}.mp3'
    clip.audio.write_audiofile(destination)









