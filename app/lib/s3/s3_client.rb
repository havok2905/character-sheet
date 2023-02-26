require 'aws-sdk-s3'

module S3
  class S3Client
    attr_accessor :s3_client

    def initialize
      Aws.config.update({
        endpoint: ENV['S3_ENDPOINT'],
        region: ENV['S3_REGION'],
        access_key_id: ENV['S3_ACCESS_KEY_ID'],
        secret_access_key: ENV['S3_SECRET_ACCESS_KEY'],
        http_continue_timeout: ENV['S3_HTTP_CONTINUE_TIMEOUT'].to_i
      })

      @s3_client = Aws::S3::Client.new
    end

    def generate_object_key_from_file(file)
      uuid = SecureRandom.uuid
      file_name = file.original_filename
      "#{uuid}_#{file_name}"
    end
    
    def put_object(acl, bucket, body, key)
      @s3_client.put_object(
        acl: acl,
        body: body,  
        bucket: bucket,
        key: key
      )
    end
  end
end
