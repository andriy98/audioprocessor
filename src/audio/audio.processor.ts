import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job, Queue } from 'bull';

@Processor('audio')
export class AudioProcessor {
  private readonly logger = new Logger(AudioProcessor.name);

  constructor(@InjectQueue('video') private readonly videoQueue: Queue) {}

  @Process('transcode')
  async handleTranscode(job: Job) {
    this.logger.debug('Start transcoding...');
    this.logger.debug(job.data);
    this.logger.debug('Transcoding completed');

    this.logger.debug('Adding video to queue');

    await this.videoQueue.add(
      'process',
      {
        file: 'video.mp4',
      },
      {
        attempts: 5
      }
    );

    this.logger.debug('Video added to queue');

  }
}
