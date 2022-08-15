require 'jwt'

module Auth
  class JsonWebToken
    def decode(token)
      decoded = JWT.decode(token, secret_key)[0]
      HashWithIndifferentAccess.new decoded
    end

    def encode(payload, exp = 7.days.from_now)
      payload[:exp] = exp.to_i
      JWT.encode payload, secret_key
    end

    def expired?(token)
      decoded = decode token
      decoded[:exp] <= 0.days.from_now.to_i
    end

    private

    def secret_key
      Rails.application.secret_key_base
    end
  end
end