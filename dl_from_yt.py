import moviepy.editor as mp 
from pytube import Playlist
import os

playlist = Playlist("https://www.youtube.com/playlist?list=PL8SYXpDG3AD_8mVplptdHR8Djqg0w6tf1")
MusicList = [ f for f in os.listdir('C:/Users/Alan/Desktop/Code/Music_Player/Assets/Music') if os.path.isfile(os.path.join('C:/Users/Alan/Desktop/Code/Music_Player/Assets/Music',f)) ]

for video in playlist.videos:
    video.streams.get_lowest_resolution().download("C:/Users/Alan/Desktop/Code/Music_Player/Assets/Music")
    print("Vidéo télécharger : ", video.title,)

for music in MusicList:
    source = f'C:/Users/Alan/Desktop/Code/Music_Player/Assets/Music/{music}'
    clip = mp.VideoFileClip(source)
    destination = f'C:/Users/Alan/Desktop/Code/Music_Player/Assets/Music/MP3/{music}.mp3'
    clip.audio.write_audiofile(destination)
    
print("Toutes les videos sont telecharger")